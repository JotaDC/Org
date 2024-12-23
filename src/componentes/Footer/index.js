import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}> 
            <div className="redes">
                <a href="https://www.github.com/JotaDC/" target="_blank" rel="noreferrer">
                    <img src="/img/github.png" alt="Facebook"/>
                </a>  
                <strong>Desarrollado por Javier Cañete</strong>
           
            </div>
            
        
    </footer>
}

export default Footer