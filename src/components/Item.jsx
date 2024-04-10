import "./Style.css"

function Item(){
    return (
        <div className="item">
                <div className="item-header">
                    <a href="#">
                        <img src="https://imgs.search.brave.com/apEPKXYqRkpZV4QWk3u2ZsX2Urk5oTUPnnuNUxLBxnE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lc3BhcmFwZXJm/aWxkZXdhc2FwLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvaW1h/Z2VuZXMtZGUtZmFt/b3Nvcy1ndWFwb3Mt/cGFyYS1jb21wYXJ0/aXIuanBn" alt="" />
                    </a>
                    <h2 className="title-target">Wilson parada</h2>
                </div>
                <div className="item-describcion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas explicabo inventore, neque amet ad commodi totam exercitationem error unde dicta!</p>
                </div>
                <div className="item-boton">
                    <a href="/Perfil">
                    <h2>Explorar</h2>
                    </a>
                </div>
            </div>
)
}

export default Item