import Image from "next/image"
import Router from "next/router"

import { Button } from "./button"

interface CardProps {
  id: number
  fleet_average_age: string
  airline_id: string
  callsign: string
  iata_code: string
  icao_code: string
  country_iso2: string
  date_founded: string
  iata_prefix_accounting: string
  airline_name: string
  country_name: string
  fleet_size: string
  status: string
  type: string
}

export const Card = ({
  id,
  fleet_average_age,
  airline_id,
  callsign,
  iata_code,
  icao_code,
  country_iso2,
  date_founded,
  iata_prefix_accounting,
  airline_name,
  country_name,
  fleet_size,
  status,
  type,
}: CardProps) => {
  return (
    <div className=" flex  flex-col items-center rounded-xl border-2 border-solid border-slate-600   bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:border-sky-300 ">
      <div className="p-6">
        <p className="mb-2 text-2xl ">
          Airline name : <span className="font-semibold">{airline_name}</span>
        </p>
        <p className="mb-4  hover:text-sky-300">
          Country name :<span className="font-semibold"> {country_name} </span>
        </p>

        <p className="mb-4  hover:text-sky-300">
          Fleet size : <span className="font-semibold">{fleet_size} </span>{" "}
        </p>
        <p className="mb-4 hover:text-sky-300">
          Fleet average age :
          <span className="font-semibold">{fleet_average_age}</span>
        </p>
        <p className="mb-4  hover:text-sky-300">
          Founded in : <span className="font-semibold">{date_founded} </span>{" "}
        </p>
        <p className="mb-4 hover:text-sky-300">
          Callsign :<span className="font-semibold">{callsign}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          iata code :<span className="font-semibold">{iata_code}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          iata prefix :
          <span className="font-semibold">{iata_prefix_accounting}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          icao code :<span className="font-semibold">{icao_code}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          country iso2 :<span className="font-semibold">{country_iso2}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          status :<span className="font-semibold">{status}</span>
        </p>
        <p className="mb-4 hover:text-sky-300">
          type :<span className="font-semibold">{type}</span>
        </p>
      </div>
    </div>
  )
}
