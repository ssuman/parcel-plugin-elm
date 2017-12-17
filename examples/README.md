## HTML
```
<!-- First page -->
<!doctype html>
<html>
<head>
<meta charset="utf-8">

</head>
<body>
  <div id="main">
  </div>
  <script src="./index.js"></script>
</body>
</html>
```

## ELM Bootstrap
```
import('./main.elm').then(Elm => {
    var mountNode = document.getElementById('main');
    var app = Elm.Main.embed(mountNode);
});
```

## ELM Code
```
import Html exposing (..)
import Html.Events exposing (onClick)

model = 0

view model =  div [] 
    [ button [onClick Decrement] [text "-"] 
    ,text (toString model)
    , button [onClick Increment] [text "+"]
    ]

type Message = Increment | Decrement

update msg model = 
    case msg of
        Increment -> model + 2
        Decrement -> model - 1

main = beginnerProgram
        {
            model = model,
            view = view,
            update = update
        }
```