import React, { useState } from 'react'
import * as API from '../../Helpers/APIRequest';
import { Table, Radio, Tag } from 'antd'
import Media from 'react-media';
import Versus from './VersusAnimation'
import VersusSmall from './VersusAnimationSmall'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',

    render: text => <a>{text}</a>,
  },
  {
    title: 'Website',
    dataIndex: 'website',
  },

  {
    title: 'Description',
    dataIndex: 'description',
  },

  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = 'red'


          switch (tag.tag.name) {
            case 'Pyszne.pl': color = 'orange'
              break;
            case 'Karta płatnicza': color = 'red'
              break;
            case 'Gotówka': color = 'yellow'
              break;
            case 'WWW': color = 'blue'
              break;
            default: color = ''
              break;
          }


          if (tag.tag.name === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag.tag.id}>
              {tag.tag.name.toUpperCase()}

            </Tag>
          );
        })}
      </>
    )
  }
]



const columns_small = [
  {
    title: 'Name',
    dataIndex: 'name',

    render: text => <a>{text}</a>,
  },

  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = 'red'


          switch (tag.tag.name) {
            case 'Pyszne.pl': color = 'orange'
              break;
            case 'Karta płatnicza': color = 'red'
              break;
            case 'Gotówka': color = 'yellow'
              break;
            case 'WWW': color = 'blue'
              break;
            default: color = ''
              break;
          }


          if (tag.tag.name === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag.tag.id}>
              {tag.tag.name.toUpperCase()}

            </Tag>
          );
        })}
      </>
    )
  }
]




class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      value: '',
      first: true,
      clickc: false
    }
  }

  onClickVS() {
    this.setState({ clickc: true })
  }


  componentDidMount() {
    this.getRestaurants()
    this.getMyVote()
   // setTimeout(() => {    this.setState({ clicked: true })  }, 5000);
  }
  getRestaurants() {
    API.RequestAPI(API.get_request, 'Vote/Restaurants', {})
      .then(
        response => {
          let res = response.map(row => ({
            key: row.id.toString(),
            description: row.description,
            website: row.website,
            name: row.name,
            tags: row.restaurantTags
          }))
          this.setState({ restaurants: res })
        }
      )
      .catch(err => { console.log(err) });
  }

  vote(restaurantID) {
    API.RequestAPI(API.post_request, 'Vote', { restaurantID })
      .then(
        response => {
        }
      )
      .catch(err => { console.log(err) });
  }

  getMyVote() {
    API.RequestAPI(API.get_request, 'Vote/MyVote', {})
      .then(
        response => {
          if (response.restaurantID != null)
            this.setState({ value: response.restaurantID.toString() })
          console.log(response)
        }
      )
      .catch(err => { console.log(err) });
  }
  
  conditionalRender()
  {
    console.log(this.state.clickc)
      switch(this.state.clickc){ 
          case false: return( 
          
          
          
          <Media queries={{ small: { maxWidth: 768 } }}>
        {matches =>
          matches.small ? (
            <div  onClick={() => this.onClickVS()}> <VersusSmall > </VersusSmall> </div>
          ) : (
            <div  onClick={() => this.onClickVS()}> <Versus > </Versus> </div>
            )}
      </Media>
          
          
          
          
          
          )
          break;
          case true: return( 
         
<Media queries={{ small: { maxWidth: 768 } }}>
        {matches =>
          matches.small ? (
            <Table
              rowSelection={{
                selectedRowKeys: [this.state.value],
                type: 'radio',
                onChange: (selectedRowKeys, selectedRows) => {
                  this.setState({ value: `${selectedRowKeys}` })
                  this.vote(parseInt(`${selectedRowKeys}`))
                }
              }}
              dataSource={this.state.restaurants} columns={columns_small} pagination={false} />
          ) : (
              <Table
                rowSelection={{
                  selectedRowKeys: [this.state.value],
                  type: 'radio',
                  onChange: (selectedRowKeys, selectedRows) => {
                    this.setState({ value: `${selectedRowKeys}` })
                    this.vote(parseInt(`${selectedRowKeys}`))
                  }
                }}
                dataSource={this.state.restaurants} columns={columns} pagination={false} />
            )}
      </Media>)
      }
  }


render(){

  return (
    <div >



{this.conditionalRender()}

    </div>

  )
}
}
export default Restaurants