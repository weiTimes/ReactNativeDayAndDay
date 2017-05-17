/*
 * @Author: yewei 
 * @Date: 2017-05-17 10:56:33 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 11:02:30
 * 
 * 服务URL
 * 基于豆瓣open api 的图书、音乐、电影服务
 * 如果https://api.douban.com/v2/都保持不变，则可以将其设置为BaseURL
 */

const ServiceURL = {
    //图书搜索
    book_search: 'https://api.douban.com/v2/book/search',
    //图书详情
    book_search_id: 'https://api.douban.com/v2/book/',
    //音乐搜索
    music_search: 'https://api.douban.com/v2/mine/search',
    //音乐详情
    music_search_id: 'https://api.douban.com/v2/mine/',
    //电影搜索
    movie_search: 'https://api.douban.com/v2/movie/search',
    //电影详情
    movie_search_id: 'https://api.douban.com/v2/movie/subject/',

    has_read_book: 'https://api.douban.com/v2/book/user/82690325/collections?status=read',

    want_read_book: 'https://api.douban.com/v2/book/user/82690325/collections?status=wish'
}

export default ServiceURL;