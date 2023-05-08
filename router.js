const router = function Router() {

    const list = {
      get: {},
      post: {}
    };
  
    function post(url, action) {
      list.post[url] = action;
    }
  
    function get(url, action) {
      list.get[url] = action;
    }
  
    function find(method, url) {
  
      result = list[method][url]();
    
      if(typeof result === 'function')
        return result();
      return result;
    }
  
    return {
      get,
      post,
      find,
      list
    };
  }

  module.exports = router