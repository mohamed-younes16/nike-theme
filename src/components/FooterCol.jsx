

export default function FooterCol({title,links}) {
  return (
    <div>
        <p className="font-bold text-2xl mb-10"> {title} </p>
        <ul className="text-xl">
            {links.map(e=><li  className="hover:scale-105 transition-all  hover:text-orange-600 cursor-pointer mb-2" key={e.name}>
                <a href={e.link}></a>{e.name} </li> )}
        </ul>
    </div>
)
}
