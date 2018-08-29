import Browser
import Html exposing (..)
import Html.Events exposing (onClick)

initialModel = 0

view model =  
    div 
        [] 
        [ button [ onClick Decrement ] [ text "-" ] 
        , text <| String.fromInt model
        , button [ onClick Increment ] [ text "+" ]
        ]

type Message 
    = Increment 
    | Decrement

update msg model = 
    case msg of
        Increment -> 
            model + 1
        
        Decrement -> 
            model - 1

main = 
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }