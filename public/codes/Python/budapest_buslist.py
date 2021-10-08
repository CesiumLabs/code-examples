import requests

r = requests.get(
    'https://futar.bkk.hu/api/query/v1/ws/otp/api/where/vehicles-for-location.json?lon=47.521822&lat=19.031826&radius=50')
list_r = r.json()
list_only_r = list_r["data"]["list"]
vehicles = []
vehiclescounter = {}
errors = 0
for i in list_only_r:
    if "vehicleId" in i:
        vehicles.append(i)

    if "label" in i:
        currentlabel = i["label"]
        if currentlabel in vehiclescounter:
            vehiclescounter[currentlabel] += 1
        else:
            vehiclescounter[currentlabel] = 1
    else:
        errors += 1
print(errors, ' error')
for i, a in vehiclescounter.items():
    print(i, ':', a, ' piece')
