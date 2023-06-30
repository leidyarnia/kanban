import{useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function Header(){
    
    const [user, setUser] = useState('')

    useEffect(() => {
        const result = localStorage.getItem("USER")
        setUser(result || "")
    }, [])

    return (
    
            <div style={styles.header}>
              <div style={styles.logo}>Arnia Trello</div>
              <div style={styles.user}>
              <span style={styles.greeting}>Olá, {user}</span>{" "}
              <Link to ={"/"}>Sair</Link>
              </div>
            </div>
      );
    }
    
    const styles = {
      header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "blue",
        padding: "10px",
        color: "#ffffff",
        size:"32px",
        
      },
      logo: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "48px",
        marginRight: "10px",
      },
      user: {
        marginLeft: "10px",
      },
      greeting: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "48px",
      },
      logout: {
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "20px",
      },
    };

