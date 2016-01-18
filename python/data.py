import json
import urllib2

auctioninventory = json.load(urllib2.urlopen('http://www.beta-myauctiontrader.com/data/data.json'))

print auctioninventory
