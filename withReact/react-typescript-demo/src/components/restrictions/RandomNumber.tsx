type NumberProp = {
    value : number,
}

type PostiveType =  NumberProp & {
   isPos : boolean,
   isNeg? : never,
   isZero? : never
}

type NegativeType =  NumberProp & {
    isPos?: never,
    isNeg : boolean,
    isZero? : never
 }

 type ZeroType =  NumberProp & {
    isPos? : never,
    isNeg? : never,
    isZero : boolean
 }
 
 type RandomNumberProp = PostiveType | NegativeType | ZeroType

const RandomNumber = ({value , isPos , isNeg , isZero} : RandomNumberProp) => {
  

    return (
        <div>
            <h1>{value}</h1>
            <h2> {isPos && 'The number is positive'} {isZero && 'The number is zero'} {isNeg && 'The number is negative'}</h2>
        </div>
    )
}

export default RandomNumber