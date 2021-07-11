//console.log("Hello World");

const http = require('http'); //Impoerting http modules

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); //defining display the below content as html
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Form</title>
      <style>
      *{
        box-sizing: border-box;
        }
        
        body{
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin: 15px 30px;
            font-size: 17px;
            padding: 8px;
        }
        
        .container{
            background-color: #f2f2f2;
            padding: 5px 20px 15px 20px;
            border: 1px solid lightgray;
            border-radius: 4px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="number"],
        input[type="password"],
        input[type="date"],
        select,
        textarea{
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
        }
        
        fieldset{
            background-color: #fff;
            border: 1px solid #ccc;
        }
        
        .main_heading{
            text-align: center;
        }
        
        input[type="submit"]{
            background-color: rgb(9, 197, 9);
            width: 100%;
            height: 50px;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        input[type="submit"]:hover{
            background-color: green;
        }
      </style>
  </head>
  <body>
      <div class="container">
          <!-- Form Tags -->
          <form action="">
              <h1 class="main_heading">Payment Form</h1>
              <hr>
              <h2>Contact Info:</h2>
              
              <!-- Text input -->
              <p>Name: <input type="text" name="name" placeholder="Enter your Name" required></p> <!-- 'name' helps to pass the value to the server -->
              <!-- 'required' makes the input mandatory -->
              <!-- Radio Buttons -->
              <p>
                  <!-- Grouping -->
                  <fieldset>
                      <legend>Gender</legend> <!-- Gives a name to the group -->
                      Male <input type="radio" name="gender" id="male" required> <!-- We have to keep the 'name' of the radio buttons same otherwise brwser thinks it is different -->
                      Female <input type="radio" name="gender" id="female" required>
                  </fieldset>
              </p>
              <!-- Text area -->
              <p>Address: <textarea name="address" id="address" cols="100" rows="7" placeholder="Enter your address"></textarea></p>
              <!-- Email input -->
              <p>Email: <input type="email" name="email" id="email" placeholder="example@domain.com" required></p>
              <!-- Number input -->
              <p>Pincode: <input type="number" name="pincode" id="pincode" placeholder="1234567"></p>
              
              <h2>Payment Info</h2>
              <p>Card Type: 
                  <select name="card_type" id="card_type" required>
                      <!-- Dropdown Menu -->
                      <option value="">---Select a Card Type--</option>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="rupay">Rupay</option>
                  </select>
              </p>
              <p>Card Number: <input type="number" name="card_number" id="card_number" required placeholder="111-2222-3333-4444"></p>
              <!-- Date Input -->
              <p>Expiry Date: <input type="date" name="exp_date" id="exp_date" required></p>
              <!-- Password Input -->
              <p>CVV: <input type="password" name="cvv" id="cvv" required placeholder="123"></p>
              <!-- Submit Button -->
              <input type="submit" value="Pay Now">
  
          </form>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});