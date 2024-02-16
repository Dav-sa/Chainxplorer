import Head from "next/head"
import { useQuery } from "@tanstack/react-query"

import { Loading } from "@/components/Loading"
import { Layout } from "@/components/layout"
import { Card } from "@/components/ui/Card"

export default function IndexPage() {
  const url = "https://ezcppwnavhquepnbdzap.supabase.co/rest/v1/airfrance"
  const options = {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Y3Bwd25hdmhxdWVwbmJkemFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMjcxMTMsImV4cCI6MjAyMDkwMzExM30.vzAmoqfrPq6yf7WeIPp_aRvJvUl9jp1xy1hSrvu3IeQ",
    },
  }

  const { isLoading, error, data } = useQuery({
    queryFn: () => fetch(url, options).then((res) => res.json()),
  })

  if (isLoading)
    return (
      <Layout>
        <Loading></Loading>
      </Layout>
    )

  if (error) return `An error has occurred`

  return (
    <Layout>
      <Head>
        <title>Air France</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container  flex-col justify-center  gap-6 pt-6 pb-8  md:py-10">
        {data.map((item) => (
          <Card
            id={item.id}
            fleet_average_age={item.fleet_average_age}
            airline_id={item.airline_id}
            callsign={item.callsign}
            iata_code={item.iata_code}
            icao_code={item.icao_code}
            country_iso2={item.country_iso2}
            date_founded={item.date_founded}
            iata_prefix_accounting={item.iata_prefix_accounting}
            airline_name={item.airline_name}
            country_name={item.country_name}
            fleet_size={item.fleet_size}
            status={item.status}
            type={item.type}
          />
        ))}
      </section>
    </Layout>
  )
}
