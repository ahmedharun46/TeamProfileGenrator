const generateHTML = function (teamString) {
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
<title>TeamProfileGenrator</title>
</head>
<body>
    <div class="header">
    <div class = "jumotron bg-info">
    <h1 class= "display-1 text-#ffc107 text-center">Business Team</h1>
    </div>
    </div>
    <div class = "container-body container-fluid"></div>
    <div class="row">
        ${teamString}
    </div>
</body>
</html>`

}
module.exports = generateHTML