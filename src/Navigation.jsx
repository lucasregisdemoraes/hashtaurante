export function Navigation(props) {
    return <div className="navegacao">
        <input onClick={() => props.setSelectedPage(0)} type="radio" name="page-option" id="page-0" defaultChecked />
        <label htmlFor="page-0">Pratos Principais</label>
        <input onClick={() => props.setSelectedPage(1)} type="radio" name="page-option" id="page-1" />
        <label htmlFor="page-1">Sobremesas</label>
        <input onClick={() => props.setSelectedPage(2)} type="radio" name="page-option" id="page-2" />
        <label htmlFor="page-2">Bebidas</label>
    </div>
}