import { GET } from "../api/storedata/route";

export default async function Page() {
  const storeData = await GET();

  return (
    <>
      <div >
        <pre className=''>{JSON.stringify(storeData, null, 2)}</pre>
      </div>
    </>
  );
}
