export default function TrLigne(props) {
    return (
    <tr className={`table-${props.personne.status? 'succes':'danger'}`}>
        <td>{props.personne.prenom}</td>
        <td>{props.personne.nom}</td>
        <td>
            <button 
                onClick={() => props.enlever(props.id)}
                className="btn btn-danger">
                <i className="fa fa-trash"></i>
            </button>
        </td>
        <td>
            <button 
                onClick={() => props.modifier(props.id)}
                    className="btn btn-warning">
                <i className="fa fa-check"></i>
            </button>
        </td>
    </tr>)
}