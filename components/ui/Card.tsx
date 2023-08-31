import Image from "next/image"
import Router from "next/router"

import { Button } from "./button"

interface CardProps {
  id: string
  name: string
  ath: number
  current_price: number
  image: string
  max_supply: number
}

export const Card = ({
  id,
  name,
  ath,
  current_price,
  image,
  max_supply,
}: CardProps) => {
  return (
    <div
      onClick={() => Router.push("/coins/[id]", `/coins/${id}`)}
      className=" border-solid border-2 border-slate-600 flex w-auto flex-col items-center rounded-xl   bg-slate-800 p-6 text-center hover:border-2 hover:border-solid hover:border-sky-300 "
    >
      <Image
        className="rounded-t-lg "
        src={image}
        alt="picture of the coin"
        width={100}
        height={150}
      />

      <div className="p-6">
        <p className="mb-2 text-2xl ">
          Name : <span className="font-semibold">{name}</span>
        </p>
        <p className="mb-4  hover:text-sky-300">
          Current price :{" "}
          <span className="font-semibold"> {current_price} $</span>
        </p>

        <p className="mb-4  hover:text-sky-300">
          All time high : <span className="font-semibold">{ath} $</span>{" "}
        </p>
        <p className="mb-4 hover:text-sky-300">
          Max supply :{" "}
          <span className="font-semibold">
            {max_supply ? max_supply : "No limit"}
          </span>
        </p>
        <Button variant="default" size="default">
          More Details
        </Button>
      </div>
    </div>
  )
}
