export function IndecateR(props) {

    const changeStr=(num)=>{
        let res=String(num);
        if(num<10) res='0'+res;
        return res;
    }

    return (
        <div>
            <table className="table is-hoverable">
            
            <thead>
                <tr>
                    <th>順位</th>
                    <th>名前</th>
                    <th>得点</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
            {props.ranking.map((rank, i) => {
              const time=rank.besttime;
              const hour=Math.floor(time/3600000);
              const minite=Math.floor((time%3600000)/60000);
              const second=Math.floor((time%3600000%60000)/1000);
              return (
                <tr key={rank.id}>
                    <td>{i+1}</td>
                    <td>{rank.nickname}</td>
                    <td>{rank.bestscore}</td>
                    <td>{changeStr(hour)} : {changeStr(minite)} : {changeStr(second)}</td>
                </tr>
            );
            })}
            </tbody>
            </table>
        </div>
    );
}