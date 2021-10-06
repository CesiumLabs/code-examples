const Card = ({ name, language, snipp}) => {
    return(
    <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{name}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{language}</h2>
          <p class="leading-relaxed text-base">{snipp}</p>
        </div>
      </div>
      )
}

export default Card;