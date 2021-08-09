function navbar() {
  return ` <div id="navbar">
  <img id="logo_img" src="https://ak.picdn.net/shutterstock/videos/1015029286/thumb/10.jpg"/>
  <h1 id="logo">Foodie</h1>
    

    <div id="searchBar">
       <input type="search" id="query" placeholder="Search By Name" />
  <div id="names"></div>
    </div>

        <div class="options">
   
                <h3><a href="home.html">Home</a></h3>
            <h3><a href="latest.html">Latest receipe</a></h3>
            <h3><a href="random.html">Receipe of the Day</a></h3>
          
        </div>
    </div>
    <div id="data"></div>`;
}

export default navbar;
