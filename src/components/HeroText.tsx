import ButtonStart from "./ButtonStart"

const HeroText = () => {
  return (
    <section
        className='w-1/2'
    >
        <h1
            className='
                flex flex-wrap
                w-[44rem]
                text-3xl md:text-6xl
                text-[#242d52]
                font-medium
                mb-4
            '
        >
            Bring everyone <br /> together to build <br />better products.
        </h1>
        <p
            className='
                w-[44rem]
                text-4-sm md:text-4xl
                text-zinc-500
                mb-5
            '
        >
            Manage makes it simple for software <br /> teams to plan day-to-day 
            tasks while <br /> keeping the larger team goals in view. 
        </p>
        <ButtonStart/>
    </section>
  )
}

export default HeroText