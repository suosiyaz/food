import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZrmyIQL_8joVaelsF-HRh45L95L4UB2yFklk6_WHuJ-HEW7KEd5RUE-iZXedrg62kmfzVYn6oaC2R_905B3o2Bh0saol1WHmsXDhZKTgGcxG8B-HrgMX8UmkruZtZHYx'
    }
});