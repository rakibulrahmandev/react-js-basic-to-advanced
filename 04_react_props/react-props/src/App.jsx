import Card from "./components/Card/Card"
import korea from "./assets/korea.jpg"

export default function App() {

  const countryInfo = {
    'Capital': 'Seoul',
    'Official Language': 'Korean (한국어)',
    'Population': 'Approximately 51 million',
    'Currency': 'South Korean Won (₩)',
    'Government': 'Presidential Republic',
    'Famous For': 'technology (Samsung, LG)',
    'Location': 'Eastern Asia, bordering North Korea',
    'Time Zone': 'Korea Standard Time (KST), UTC+9'
  }

  return (
    <>
      <div className="bg-gray-950 w-full min-h-screen flex flex-wrap items-center justify-center gap-10">
        <Card countryName="South Korea" info={countryInfo} flag={korea} />
      </div>
    </>
  )
}