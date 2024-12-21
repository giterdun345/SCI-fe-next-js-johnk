import MainComponent from "@components/MainComponent";

export default async function Page() {
  let response = { data: [] };
  let errorMessage = "";

  try {
    const res = await fetch('https://api.swu-db.com/catalog/hps');

    if (!res.ok) {
      errorMessage = "Failed to fetch data from external API";
      response = { data: [] };
    } else {
      response = await res.json();
    }
  } catch (error) {
    console.error("API Request Error:", error);
    errorMessage = "Error during data fetch";
    response = { data: [] };
  }

  const filteredOptions = response.data.filter((option: string) => !option.includes("+"))

  return (
    <MainComponent hpOptions={filteredOptions} errorMessage={errorMessage} />
  );
}
