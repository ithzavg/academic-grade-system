const Dashboard = () =>{
    const view = `
        <section class= "groups">
            <a href="/">back</a>
            <div class= "groups__header">
                <p>Groups</p>
            </div>
            <div class= "groups__item">
                <div class="item__header"></div>
                <div class="item__content"></div>
            </div>
        </section>
        <section class= "students">
            <div class="students__header">
                <p>Students</p>
            </div>
            <div class="students__content">
                <table>
                    <tr>
                        <th>name</th>
                        <th>period 1</th>
                        <th>period 2</th>
                        <th>period 3</th>
                        <th>period 4</th>
                        <th>total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
    `

    return view;
}

export default Dashboard;