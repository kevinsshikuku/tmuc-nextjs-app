 const cheerio = require('cheerio') // 1

 export default  news = async (req, res) => { // 2

    try { // 4
      const response = await fetch(`https://tmuc.ac.ke/`)
      const htmlString = await response.text()
      const $ = cheerio.load(htmlString);

     let data = []

     $(".post-block").each(function(i, post) {
       let img = $(post).find('img').attr('src')
       let link = $(post).find('a').attr('href')

       let title = $(post).text().trim();
       let ad = false

        data.push({img, link, title, ad});
       });
    

        let element = {
              ad_link:'https://kevinshikuku.netlify.app', 
              title: 'infom your friends about this application https://tmuc.netlify.app', 
              ad_img:'photo/AF1QipN3NddYM5MAxEhfxvFr5Lr7oLOmREQmF1xNwR8r',
              ad: true
            }
         data.splice(1, 0, element);
      

      return res.json({
        info: data
      })
    } catch (e) { // 5
      return res.json({
        error: `An error occured while fetching the news.`,
      })
    }
  }