export default ({children}) => (
<table>
    <thead>
        <tr>
            <td>Nome</td>
            <td>Gênero</td>
            <td>Filmes</td>
        </tr>
    </thead>
    <tbody>
        {children}
    </tbody>
</table>
);
