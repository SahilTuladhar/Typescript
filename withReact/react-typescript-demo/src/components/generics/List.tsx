import { ReactNode } from "react"

type ListProps<Type > = {
  items : Type[]
  onClick : (value : Type) => void
}

const List = <Type extends string | number>({items , onClick} : ListProps<Type>) => {

    return (
       <div>
         {
            items.map((item , index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        <h1>{item}</h1>
                    </div>
                )
            })
         }
       </div>
    )

}

export default List