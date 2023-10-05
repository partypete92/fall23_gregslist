export const HouseView = `  <section class="container-fluid">

<section>
  <div class="row justify-content-center">
    <div class="col-8">
      <form onsubmit="app.HousesController.createHouse(event)">


        <div class="mb-2">
          <label for="name">Name</label>
          <input id="name" type="text" minlength="5" maxlength="15" name="name" placeholder="Name...">
        </div>

        <div class="mb-2">
          <label for="year">Year</label>
          <input id="year" type="number" min="1900" max="2024" name="year" placeholder="2023">
        </div>

        <div class="mb-2">
          <label for="bedrooms">Bedrooms</label>
          <input id="bedrooms" type="number" minlength="1" maxlength="20" name="bedrooms" placeholder="Rooms">
        </div>

        <div class="mb-2">
          <label for="Bathrooms">Bathrooms</label>
          <input id="Bathrooms" type="number" minlength="1" maxlength="20" name="Bathrooms" placeholder="Rooms">
        </div>

        <div class="mb-2">
          <label for="Sqft">Sqft</label>
          <input id="Sqft" type="number" minlength="100" maxlength="5000" name="Sqft" placeholder="Sqft">
        </div>

        <div class="mb-2">
          <label for="Price">Price</label>
          <input id="Price" type="number" minlength="1000" maxlength="10000000" name="Price" placeholder="$$$">
        </div>

        <div class="mb-2">
          <label for="Description">Description</label>
          <input id="Description" type="text" minlength="10" maxlength="100" name="Description"
            placeholder="Describe your home">
        </div>

        <div class="mb-2">
          <label for="img">imgUrl</label>
          <input id="img" type="text" minlength="10" maxlength="100" name="img" placeholder="Place a Pic!">
        </div>

        <div>
          <Button class="btn btn-success" type="submit">Submit</Button>

        </div>

      </form>
    </div>

  </div>

</section>




<div id="houses" class="row justify-content-center">
  <!-- <div class="col-10  car-border m-2">
    <div class="d-flex">
      <img class="house-img mt-2"
        src="https://www.huduser.gov/portal/pdredge/images/pdr_edge/Inpractice_061614_1.jpg" alt="First house">
      <div class="mx-3">
        <h2>First House</h2>
        <p>1/09/2004</p>
        <h3>Bedrooms: 2</h3>
        <h3>Bathrooms: 1</h3>
        <h3>Sqft: 2000</h3>
        <h3>Price: 200000</h3>
        <p>Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione dolore fugiat
          deleniti ducimus ad, minus blanditiis perferendis assumenda laborum?'</p>

      </div>
    </div>
  </div> -->
</div>
</section>
`


