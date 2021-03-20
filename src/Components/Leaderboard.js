import React, { Component } from 'react';
import './styles.css';
class Leaderboard extends Component{
    constructor(props) {
        super(props);

        this.sortUsersByTime = this.sortUsersByTime.bind(this);
        this.sortUsersByName = this.sortUsersByTime.bind(this);
        this.filterRank = this.filterRank.bind(this);
        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);

        this.state = {
            users: this.props.users,
            ranking: [],
            asc: false,
            alph: false,
            page: 1,
            pageMax: 1,
        };
    }
    componentDidMount() {
        const ranking = this.state.users;
        const paginate = this.props.paginate;
        ranking.sort(this.compareTimes);
        ranking.map((user, index) => user.rank = index +1);
        ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
        this.setState({ pageMax: ranking[ranking.length - 1].page})
        this.setState({ ranking: ranking});
      }
    compareTimes(a, b)
    {
        if(a.time < b.time)
        {
            return -1;
        }
        if(b.time < a.time)
        {
            return 1;
        }
        return 0;
    }
    compareName(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
    }
    sortUsersByName() {
        const ranking = this.state.ranking;
        const paginate = this.props.paginate;
        if(this.state.alph === true) {
            ranking.sort(this.compareName).reverse();
            ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
            this.setState({ ranking: ranking});
            this.setState({ alph: false});
            this.setState({ asc: true});
            } else {
            ranking.sort(this.compareName);
            ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
            this.setState({ ranking: ranking});
            this.setState({ alph: true});
            this.setState({ asc: true});
            }
          }
    sortUsersByTime() {
        const ranking = this.state.ranking;
        const paginate = this.props.paginate;
        if(this.state.asc === true) {
          ranking.sort(this.compareTimes);
          ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
          this.setState({ ranking: ranking});
          this.setState({ asc: false});
          this.setState({ alph: false});
        } else {
          ranking.sort(this.compareTimes).reverse();
          ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
          this.setState({ ranking: ranking});
          this.setState({ asc: true});
          this.setState({ alph: false});
        }
      }
    filterRank(e) {
        const ranking = this.state.users;
        const paginate = this.props.paginate;
        const newRanking = [];
        const inputLength = e.target.value.length;

        for(var i = 0; i < ranking.length; i++) {
          const str = ranking[i].name.slice(0, inputLength).toLowerCase();
          if(str === e.target.value.toLowerCase()) {
            newRanking.push(ranking[i]);
          }
        }
        newRanking.sort(this.compareTimes);
        newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
        this.setState({ ranking: newRanking});
        this.setState({ page: 1});
        if(newRanking.length > 0){
          this.setState({ pageMax: newRanking[newRanking.length - 1].page})
        }
      }
    increasePage(e) {
        let page = this.state.page;
        if(page < this.state.pageMax){
          page += 1;
        }
        this.setState({ page: page});
      }
    decreasePage(e)
    {
        let page = this.state.page;
        if(page > 1)
        {
          page -= 1;
        }
        this.setState({ page: page});
      }
      render() {
        return (
          <div>
            <h1>Covid Testing World Record Any% Leaderboard</h1>
            <div className = "sub-header">
            <button className = 'rules-button'>Read the Rules</button>
            <form className='search-bar' onChange={this.filterRank}>
              <input type="search" name="search" placeholder="Name"/>
            </form>
            <button className = "form-button">Submit a Run</button>
            </div>
            <table id="lBoard" className='fancy-table'>
              <tbody className='ranking'>
                <tr>
                  <td className='rank-header sortTime' onClick={ this.sortUsersByTime }> Rank </td>
                  <td className='rank-header sortAlpha' onClick={ this.sortUsersByName }> Name </td>
                  <td className='rank-header' onClick={ this.sortUsersByTime }> Time </td>
                </tr>
                {
                this.state.ranking.map((user, index) =>
                   <tr className='ranking' key={index}>
                    { user.page === this.state.page ? <td className='data'>{ user.rank }</td> : null }
                    { user.page === this.state.page ? <td className='data'>{ user.name }</td> : null }
                    { user.page === this.state.page ? <td className='data'>{ user.time }</td> : null }
                   </tr>
                 )
               }
              </tbody>
            </table>
            <div className = "page">
              <button className='page-select' onClick={ this.decreasePage }><span>&#8249;</span></button>
              { this.state.page === 1 ? null: <p onClick={ this.decreasePage }> { this.state.page - 1 }</p>}
              <button className = 'page-number'> { this.state.page }</button>
              { this.state.page < this.state.pageMax ? <p onClick={ this.increasePage }> { this.state.page + 1 }</p>: null }
              <button className='page-select' onClick={ this.increasePage }><span>&#8250;</span></button>
            </div>
          </div>

        )};

};
export default Leaderboard;
