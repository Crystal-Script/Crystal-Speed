local menu = false
local ismotor = false



function Display(bool, speed, engine, autopilot)
    SendNUIMessage({
        type = bool,
        speed = speed,
    })
end



Citizen.CreateThread(function ()
    while true do
      
        local player  = PlayerPedId()
        local veh = GetVehiclePedIsIn(player, false)
        local speed = GetEntitySpeed(veh)
     

        if IsPedInAnyVehicle(player, veh) then
            menu = true
            if GetIsVehicleEngineRunning(veh) then
                ismotor = true
            else
                ismotor = false
            end
          
    
        else
            menu = false
        end

        if IsPauseMenuActive() then
            menu = false
        end

        if menu then
            Display(true, math.floor(speed*3.6), ismotor)

        else
            Display(false)
        end

        

        Citizen.Wait(0)
    end
end)
