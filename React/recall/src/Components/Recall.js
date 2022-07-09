import React from 'react'
import {useDispatch, useSelector} from 'react-redux'




const recall= () => {
    // const dispatch = useDispatch();
    const loadItems = async () => {
        const apiData = await fetch('https://www.saferproducts.gov/RestWebServices/Recall?Format=Json&RecallTitle=food')
        const jsonData = await apiData.json()
        
        console.log(loadItems)
    };



  return (
    <div>
        
    </div>
  )
}

export default recall