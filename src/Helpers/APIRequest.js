
import axios from 'axios';
import cookie from 'react-cookies'

 function Get(url)
{
    return  axios({
        method: 'get',
        url: url,
        headers: {'Authorization': GetAPIToken()}
      }).then(res => {
        RefreshAPIToken(res.headers['refreshedToken'])
        return res.data
    }).catch(err => {
      throw err
    });
}

 function Post(url, data)
{

    return  axios({
        method: 'post',
        url: url,
       data,
       headers: {'Authorization': GetAPIToken()}
      }).then(res => {
        RefreshAPIToken(res.headers['refreshedToken'])

        return res.data
    }).catch(err => {
      throw err
    });
}

 function Put(url, data)
{
    return   axios({
        method: 'put',
        url: url,
       data,
       headers: {'Authorization': GetAPIToken()}
      }).then(res => {
        RefreshAPIToken(res.headers['refreshedToken'])
        return res.data
    }).catch(err => {
      throw err
    });
}


 function Delete(url)
{
  return axios({
        method: 'delete',
        url: url,
        headers: {'Authorization': GetAPIToken()}
      }).then(res => {
        RefreshAPIToken(res.headers['refreshedToken'])
        return  res.data
    }).catch(err => {
      throw err
    });
}

function GetAPIToken()
{
    var token = cookie.load('auth')
    if(token != null)
    return token
    else return ''
}

function RefreshAPIToken(token)
{
    if(token != null)
    cookie.save('auth', token, { path: '/' })
}

export const post_request= 'POST';
export const get_request=  'GET';
export const put_request =  'PUT';
export const delete_request = 'DELETE';

export async function RequestAPI(requestType, url, data)
{
  url = process.env.API_URL + url
    switch(requestType)
    {
        case post_request:
        return  Post(url, data)
        .then(res => { return res}).catch(err => {throw err})

        case delete_request:
        return  Delete(url)
        .then(res => { return res}).catch(err => {throw err})

        case put_request:
        return  Put(url, data)
        .then(res => { return res}).catch(err => {throw err})

        case get_request:
        return  Get(url)
        .then(res => { return res}).catch(err => {throw err})

        default: 
        return '';
    }
}




