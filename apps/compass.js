/*var express = require('express');
 var router = express.Router();
 var app = express();

 router.get('/compass', function(req, res) {
 res.send('Response from /compass');
 console.log('/compass.js');
 });


 module.exports = router;*/
module.exports = {
    parseCompassForm: function (formData) {
        var teams = {fdj: 0, euc: 0, bse: 0, cof: 0, alm: 0, mov: 0, opq: 0, ast: 0, bel: 0,
            bmc: 0, sky: 0, can: 0, grs: 0, lam: 0, ltb: 0, oge: 0, gia: 0,
            kat: 0, tcs: 0, iam: 0, tne: 0, tfr: 0};

        console.log(formData);

        var country = formData.nationRadio;
        var product = formData.productRadio;
        var color = formData.colorRadio;
        var victory = formData.victoryRadio;
        var sweden = formData.swedenRadio;
        var composition = formData.nationCompRadio;

        switch (country) {
            case 'fra':
                teams.fdj++; teams.euc++; teams.alm++; teams.bse++; teams.cof++; break;
            case 'spa' :
                teams.mov++; break;
            case 'kaz' :
                teams.ast++; break;
            case 'ned' :
                teams.bel++; teams.gia++; break;
            case 'usa' :
                teams.bmc++; teams.grs++; teams.tfr++; break;
            case 'ita' :
                teams.iam++;teams.can++; break;
            case 'bel' :
                teams.ltb++; teams.opq++; break;
            case 'aus' :
                teams.oge++; break;
            case 'rus' :
                teams.kat++; break;
            case 'den' :
                teams.tcs++; break;
            case 'gb' :
                teams.sky++; break;
            case 'ger' :
                teams.tne++; break;
            default :
                break;
        }

        switch (product) {
            case 'bet' :
                teams.fdj++; break;
            case 'car' :
                teams.euc++; break;
            case 'mob' :
                teams.mov++; break;
            case 'ins' :
                teams.alm++; break;
            case 'bic' :
                teams.bmc++; teams.tfr++; teams.can++; break;
            case 'fin' :
                teams.cof++; teams.iam++; teams.tcs++; break;
            case 'oil' :
                teams.gia++; break;
            case 'dor' :
                teams.ltb++; break;
            case 'min' :
                teams.oge++; break;
            case 'sto' :
                teams.tne++; break;
            case 'cou' :
                teams.ast++; teams.kat++; break;
            case 'was' :
                teams.bse++; break;
            case 'tel' :
                teams.sky++; break;
            case 'gps' :
                teams.grs++; break;
            case 'ste' :
                teams.lam++; break;
            case 'med' :
                teams.opq++; break;
            default :
                break;
        }

        switch(color) {
            case 'blue':
                teams.fdj++; teams.mov++; teams.ast++; teams.grs++; teams.alm++; break;
            case 'green':
                teams.euc++; teams.bel++; teams.can++; break;
            case 'red':
                teams.bmc++; teams.cof++; teams.ltb++; break;
            case 'white':
                teams.kat++; teams.bse++; teams.gia++; break;
            case 'black':
                teams.iam++; teams.opq++; teams.oge++; teams.tne++; teams.sky++; teams.tfr++; break;
            case 'yellow':
                teams.tcs++; break;
            case 'brown':
                teams.alm++; break;
            default :;
        }

        switch(victory) {
            case 'stage' :
                teams.alm++; teams.bel++; teams.bse++; teams.can++; teams.cof++; teams.fdj++; teams.grs++; teams.iam++; teams.lam++;
                teams.ltb++; teams.opq++; teams.oge++; teams.euc++; teams.gia++, teams.tne++, teams.tfr; break;
            case 'total' :
                teams.sky++; teams.ast++; teams.tcs++; teams.mov++; teams.bmc++; teams.kat++; break;
            default :;
        }

        switch(sweden) {
            case 'proSwe' :
                teams.ast++; teams.iam++; teams.gia++; break;
            case 'proWorld' :
                teams.iam++; teams.kat++; teams.lam++; teams.ltb++; teams.mov++; teams.oge++; teams.opq++; teams.sky++; teams.tcs++;
                teams.alm++; teams.bel++; teams.bmc++; teams.bse++; teams.can++; teams.cof++; teams.euc++; teams.fdj++; teams.grs++;
                teams.tfr++; teams.tne++; break;
            default :;
        }

        switch(composition) {
            case 'cohere' :
                teams.alm++; teams.cof++; teams.bse++; teams.oge++; teams.fdj++; teams.mov++; teams.euc++; teams.bel++; break;
            case 'balance' :
                teams.ast++; teams.iam++; teams.can++; teams.lam++; teams.opq++; teams.kat++; break;
            case 'mix' :
                teams.bmc++; teams.gia++; teams.tne++; teams.tfr++; teams.sky++; teams.grs++; teams.tcs++; break;
        }

        var teamsSorted = [];
        for(var elem in teams) {
            teamsSorted.push([elem, teams[elem]]);
        }

        teamsSorted.sort(function(a, b) {return b[1] - a[1]});

        //console.log("fdj: " + fdj + " euc: " + euc + " alm: " + alm + " bse: " + bse + " cof:" + cof + " ast:" + ast + " bel:" + bel + " bmc" + bmc + " sky:" + sky + " can: " + can + " grs: " + grs + " lam:" + lam + " ltb: " + ltb + " mov:" + mov + " opq:" + opq + " oge:"+ oge + " giw: " + giw + " kat:" + kat + " tcs:" + tcs + " iam: " + iam + " tne:" + tne);
        /*console.log(teams[0]);
         teams.sort(function (a, b) {
         return a.val- b.val;
         });*/
        return teamsSorted[0][0];
    }
}