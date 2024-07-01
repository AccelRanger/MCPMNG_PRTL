--[[																																																			
	    ___                  __   _____            __                     
	   /   | _____________  / /  / ___/__  _______/ /____  ____ ___  _____
	  / /| |/ ___/ ___/ _ \/ /   \__ \/ / / / ___/ __/ _ \/ __ `__ \/ ___/
	 / ___ / /__/ /__/  __/ /   ___/ / /_/ (__  ) /_/  __/ / / / / (__  ) 
	/_/  |_\___/\___/\___/_/   /____/\__, /____/\__/\___/_/ /_/ /_/____/  
	                                /____/                                
	
	
	VERSION 1.2
	Scripted by: AccelRanger
	Module Name: Web
	Type: Server-Module
]]

local module = {}

local HttpService = game:GetService("HttpService")

local apiKey = "hi"
local baseUrl = "http://localhost:3000/mngportal"

function module.logPromotion(userId, rank)
	local url = baseUrl .. "/logPromotion/" .. userId .. "/" .. rank
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:PostAsync(url, "", Enum.HttpContentType.ApplicationJson, false, headers)
	print(response)
end

function module.logDemotion(userId, rank)
	local url = baseUrl .. "/logDemotion/" .. userId .. "/" .. rank
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:PostAsync(url, "", Enum.HttpContentType.ApplicationJson, false, headers)
	print(response)
end

---------------------------------------------------------------------------------------------------------------

function module.Blacklist(userId, reason)
	local url = baseUrl .. "/blacklist/" .. userId .. "/" .. reason
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:PostAsync(url, "", Enum.HttpContentType.ApplicationJson, false, headers)
	print(response)
end

function module.hubBlacklist(userId, reason)
	local url = baseUrl .. "/hubBlacklist/" .. userId .. "/" .. reason
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:PostAsync(url, "", Enum.HttpContentType.ApplicationJson, false, headers)
	print(response)
end

function module.gameBan(userId, reason)
	local url = baseUrl .. "/gameBan/" .. userId .. "/" .. reason
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:PostAsync(url, "", Enum.HttpContentType.ApplicationJson, false, headers)
	print(response)
end

------------------------------------------------------------------------------------------------------------------

function module.checkPromotion(userId)
	local url = baseUrl .. "/checkPromotion/" .. userId
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:GetAsync(url, false, headers)
	print(response)
end

function module.checkDemotion(userId)
	local url = baseUrl .. "/checkDemotion/" .. userId
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:GetAsync(url, false, headers)
	print(response)
end

----------------------------------------------------------------------------------------------------------------

function module.getBlacklist(userId)
	local url = baseUrl .. "/getBlacklist/" .. userId
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:GetAsync(url, false, headers)
	print(response)
end

function module.getHubBlacklist(userId)
	local url = baseUrl .. "/getHubBlacklist/" .. userId
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:GetAsync(url, false, headers)
	print(response)
end

function module.getGameBan(userId)
	local url = baseUrl .. "/getGameBan/" .. userId
	local headers = { ["apiKey"] = apiKey }
	local response = HttpService:GetAsync(url, false, headers)
	print(response)
end

return module
