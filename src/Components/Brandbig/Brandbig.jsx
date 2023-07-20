import React from 'react'

const Brandbig = ({imgUrl, brand}) => {
  return (
    <div>
     
        <div className="flex items-center flex-col gap-x-2 ">
            <img src={imgUrl} className="w-48 m-4 rounded-full" alt='brand'/>
            <div>
                <span className="block text-whiite text-2xl ">{brand}</span>
            </div>
        </div>
 
</div>
  )
}

export default Brandbig