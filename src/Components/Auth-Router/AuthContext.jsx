import React from "react"


export const AuthContext = React.createContext()





export default function AuthContextProvider({ children }) {
    const [macAllModel, setMacAllModel] = React.useState([])
    const [macAccess, setMacAccess] = React.useState([])
    const [macSave, setMacSave] = React.useState([])
    const [buyItem, setBuyItem] = React.useState([])
    const [total, setTotal] = React.useState(0)

    const getMac = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res)
        setMacAllModel(res)
    }
    const getBuy = async (url) => {
        const response = await fetch(url)
        const res = await response.json()
        console.log(res, "getbuy")
        setBuyItem(res)
    }


    const handleBuy = async (buy) => {
        console.log("buy", buy)
        let add = await fetch(`http://localhost:8080/shop`, {
            method: "POST",
            body: JSON.stringify({
                buy
            }),
            headers: {
                "Content-Type": "application/json",
            },

        })
        let res = await add.json()
        getBuy(`http://localhost:8080/shop`)
        setTotal(total + Number(buy.price))
        console.log(total)
        // setBuyItem([...buyItem, buy])
    }

    // setTotal(total + Number(buy.price))
    // console.log(total)
    // setBuyItem([...buyItem, buy])
    // console.log("buyiem", buyItem)


    const handleDel = async (del) => {
        let add = await fetch(`http://localhost:8080/shop/${del.id}`, {
            method: 'DELETE', // Method itself
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
        })
        getBuy(`http://localhost:8080/shop`)

    }

    React.useEffect(() => {
        getMac(`http://localhost:8080/macAllModels`)
        getBuy(`http://localhost:8080/shop`)

        // getData()
    }, [])
    // const { macAllModels, macAccess, macWayToSave } = data
    // console.log(data)

    return <><AuthContext.Provider value={{ macAllModel, buyItem, total, handleDel, handleBuy, macAccess, macSave }}>{children}

    </AuthContext.Provider></>
}