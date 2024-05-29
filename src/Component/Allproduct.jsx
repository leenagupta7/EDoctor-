import ashwgandha from '../images/ashwgandha.jpg'
import inline from '../images/inline.jpg'
import shilajit from '../images/shilajit.jpg'
import disprin_regular from '../images/disprin_regular.jpg'
import saridon_advance_tablets from '../images/saridon_advance_tablets.jpg'
import paracetamol from '../images/paracetamol.jpeg';
import ibuprofen from '../images/ibuprofen.jpeg';
import aspirin from '../images/aspirin.jpeg';
import amoxicillin from '../images/amoxicillin.jpeg';
import azithromycin from '../images/azithromycin.jpeg';
import cetirizine from '../images/cetirizine.jpeg';
import loratadine from '../images/loratadine.jpeg';
import omeprazole from '../images/omeprazole.jpeg';
import esomeprazole from '../images/esomeprazole.jpeg';
// import metformin from '../images/metformin.jpg';
// import insulin from '../images/insulin.jpg';
// import atorvastatin from '../images/atorvastatin.jpg';
// import simvastatin from '../images/simvastatin.jpg';
// import levothyroxine from '../images/levothyroxine.jpg';
// import prednisone from '../images/prednisone.jpg';
// import hydrocortisone from '../images/hydrocortisone.jpg';
// import furosemide from '../images/furosemide.jpg';
// import hydrochlorothiazide from '../images/hydrochlorothiazide.jpg';
// import amlodipine from '../images/amlodipine.jpg';
// import lisinopril from '../images/lisinopril.jpg';
// import metoprolol from '../images/metoprolol.jpg';
// import losartan from '../images/losartan.jpg';
// import valsartan from '../images/valsartan.jpg';
// import clopidogrel from '../images/clopidogrel.jpg';
// import warfarin from '../images/warfarin.jpg';
// import digoxin from '../images/digoxin.jpg';
// import albuterol from '../images/albuterol.jpg';
// import salbutamol from '../images/salbutamol.jpg';
// import montelukast from '../images/montelukast.jpg';
// import fluticasone from '../images/fluticasone.jpg';
// import budesonide from '../images/budesonide.jpg';
// import beclomethasone from '../images/beclomethasone.jpg';
// import ranitidine from '../images/ranitidine.jpg';
// import famotidine from '../images/famotidine.jpg';
// import cimetidine from '../images/cimetidine.jpg';
// import sertraline from '../images/sertraline.jpg';
// import fluoxetine from '../images/fluoxetine.jpg';
// import citalopram from '../images/citalopram.jpg';
// import venlafaxine from '../images/venlafaxine.jpg';
// import duloxetine from '../images/duloxetine.jpg';
// import alprazolam from '../images/alprazolam.jpg';
// import diazepam from '../images/diazepam.jpg';
// import lorazepam from '../images/lorazepam.jpg';
// import tramadol from '../images/tramadol.jpg';
// import oxycodone from '../images/oxycodone.jpg';
// import hydrocodone from '../images/hydrocodone.jpg';
// import morphine from '../images/morphine.jpg';
// import codeine from '../images/codeine.jpg';

const Allproduct = [
    {
        "name": "Paracetamol 500mg Tablet",
        "newprice": "1.00",
        "actualprice": "5.00",
        "off": 80,
        "category": "Pain Relief",
        "image": paracetamol
    },
    {
        "name": "Ibuprofen 200mg Tablet (Special Deal)",
        "newprice": "2.00",
        "actualprice": "10.00",
        "off": 80,
        "category": "Pain Relief",
        "image": ibuprofen
    },
    {
        "name": "Aspirin 100mg Tablet (Special Deal)",
        "newprice": "1.50",
        "actualprice": "8.00",
        "off": 81,
        "category": "Pain Relief",
        "image": aspirin
    },
    {
        "name": "Amoxicillin 500mg Capsule",
        "newprice": "10.00",
        "actualprice": "50.00",
        "off": 80,
        "category": "Antibiotic",
        "image": amoxicillin
    },
    {
        "name": "Azithromycin 250mg Tablet",
        "newprice": "15.00",
        "actualprice": "75.00",
        "off": 80,
        "category": "Antibiotic",
        "image": azithromycin
    },
    {
        "name": "Cetirizine 10mg Tablet",
        "newprice": "3.00",
        "actualprice": "15.00",
        "off": 80,
        "category": "Antihistamine",
        "image": cetirizine
    },
    {
        "name": "Loratadine 10mg Tablet (Special Deal)",
        "newprice": "3.50",
        "actualprice": "17.50",
        "off": 80,
        "category": "Antihistamine",
        "image": loratadine
    },
    {
        "name": "Omeprazole 20mg Capsule",
        "newprice": "4.00",
        "actualprice": "20.00",
        "off": 80,
        "category": "Antacid",
        "image": omeprazole
    },
    {
        "name": "Esomeprazole 40mg Capsule",
        "newprice": "5.00",
        "actualprice": "25.00",
        "off": 80,
        "category": "Antacid",
        "image": esomeprazole
    },
    // {
    //     "name": "Metformin 500mg Tablet",
    //     "newprice": "6.00",
    //     "actualprice": "30.00",
    //     "off": 80,
    //     "category": "Diabetes",
    //     "image": metformin
    // },
    // {
    //     "name": "Insulin 10ml Injection",
    //     "newprice": "20.00",
    //     "actualprice": "100.00",
    //     "off": 80,
    //     "category": "Diabetes",
    //     "image": insulin
    // },
    // {
    //     "name": "Atorvastatin 10mg Tablet",
    //     "newprice": "7.00",
    //     "actualprice": "35.00",
    //     "off": 80,
    //     "category": "Cholesterol",
    //     "image": atorvastatin
    // },
    // {
    //     "name": "Simvastatin 20mg Tablet",
    //     "newprice": "8.00",
    //     "actualprice": "40.00",
    //     "off": 80,
    //     "category": "Cholesterol",
    //     "image": simvastatin
    // },
    // {
    //     "name": "Levothyroxine 50mcg Tablet",
    //     "newprice": "9.00",
    //     "actualprice": "45.00",
    //     "off": 80,
    //     "category": "Thyroid",
    //     "image": levothyroxine
    // },
    // {
    //     "name": "Prednisone 10mg Tablet",
    //     "newprice": "10.00",
    //     "actualprice": "50.00",
    //     "off": 80,
    //     "category": "Steroid",
    //     "image": prednisone
    // },
    // {
    //     "name": "Hydrocortisone 20mg Tablet",
    //     "newprice": "11.00",
    //     "actualprice": "55.00",
    //     "off": 80,
    //     "category": "Steroid",
    //     "image": hydrocortisone
    // },
    // {
    //     "name": "Furosemide 40mg Tablet",
    //     "newprice": "12.00",
    //     "actualprice": "60.00",
    //     "off": 80,
    //     "category": "Diuretic",
    //     "image": furosemide
    // },
    // {
    //     "name": "Hydrochlorothiazide 25mg Tablet",
    //     "newprice": "13.00",
    //     "actualprice": "65.00",
    //     "off": 80,
    //     "category": "Diuretic",
    //     "image": hydrochlorothiazide
    // },
    // {
    //     "name": "Amlodipine 5mg Tablet",
    //     "newprice": "14.00",
    //     "actualprice": "70.00",
    //     "off": 80,
    //     "category": "Blood Pressure",
    //     "image": amlodipine
    // },
    // {
    //     "name": "Lisinopril 10mg Tablet",
    //     "newprice": "15.00",
    //     "actualprice": "75.00",
    //     "off": 80,
    //     "category": "Blood Pressure",
    //     "image": lisinopril
    // },
    // {
    //     "name": "Metoprolol 50mg Tablet",
    //     "newprice": "16.00",
    //     "actualprice": "80.00",
    //     "off": 80,
    //     "category": "Blood Pressure",
    //     "image": metoprolol
    // },
    // {
    //     "name": "Losartan 50mg Tablet",
    //     "newprice": "17.00",
    //     "actualprice": "85.00",
    //     "off": 80,
    //     "category": "Blood Pressure",
    //     "image": losartan
    // },
    // {
    //     "name": "Valsartan 80mg Tablet",
    //     "newprice": "18.00",
    //     "actualprice": "90.00",
    //     "off": 80,
    //     "category": "Blood Pressure",
    //     "image": valsartan
    // },
    // {
    //     "name": "Clopidogrel 75mg Tablet",
    //     "newprice": "19.00",
    //     "actualprice": "95.00",
    //     "off": 80,
    //     "category": "Antiplatelet",
    //     "image": clopidogrel
    // },
    // {
    //     "name": "Warfarin 5mg Tablet",
    //     "newprice": "20.00",
    //     "actualprice": "100.00",
    //     "off": 80,
    //     "category": "Anticoagulant",
    //     "image": warfarin
    // },
    // {
    //     "name": "Digoxin 0.25mg Tablet",
    //     "newprice": "21.00",
    //     "actualprice": "105.00",
    //     "off": 80,
    //     "category": "Heart",
    //     "image": digoxin
    // },
    // {
    //     "name": "Albuterol 100mcg Inhaler",
    //     "newprice": "22.00",
    //     "actualprice": "110.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": albuterol
    // },
    // {
    //     "name": "Salbutamol 100mcg Inhaler",
    //     "newprice": "23.00",
    //     "actualprice": "115.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": salbutamol
    // },
    // {
    //     "name": "Montelukast 10mg Tablet",
    //     "newprice": "24.00",
    //     "actualprice": "120.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": montelukast
    // },
    // {
    //     "name": "Fluticasone 125mcg Inhaler",
    //     "newprice": "25.00",
    //     "actualprice": "125.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": fluticasone
    // },
    // {
    //     "name": "Budesonide 200mcg Inhaler",
    //     "newprice": "26.00",
    //     "actualprice": "130.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": budesonide
    // },
    // {
    //     "name": "Beclomethasone 250mcg Inhaler",
    //     "newprice": "27.00",
    //     "actualprice": "135.00",
    //     "off": 80,
    //     "category": "Asthma",
    //     "image": beclomethasone
    // },
    // {
    //     "name": "Ranitidine 150mg Tablet",
    //     "newprice": "28.00",
    //     "actualprice": "140.00",
    //     "off": 80,
    //     "category": "Antacid",
    //     "image": ranitidine
    // },
    // {
    //     "name": "Famotidine 20mg Tablet",
    //     "newprice": "29.00",
    //     "actualprice": "145.00",
    //     "off": 80,
    //     "category": "Antacid",
    //     "image": famotidine
    // },
    // {
    //     "name": "Cimetidine 200mg Tablet",
    //     "newprice": "30.00",
    //     "actualprice": "150.00",
    //     "off": 80,
    //     "category": "Antacid",
    //     "image": cimetidine
    // },
    // {
    //     "name": "Sertraline 50mg Tablet",
    //     "newprice": "31.00",
    //     "actualprice": "155.00",
    //     "off": 80,
    //     "category": "Antidepressant",
    //     "image": sertraline
    // },
    // {
    //     "name": "Fluoxetine 20mg Capsule",
    //     "newprice": "32.00",
    //     "actualprice": "160.00",
    //     "off": 80,
    //     "category": "Antidepressant",
    //     "image": fluoxetine
    // },
    // {
    //     "name": "Citalopram 20mg Tablet",
    //     "newprice": "33.00",
    //     "actualprice": "165.00",
    //     "off": 80,
    //     "category": "Antidepressant",
    //     "image": citalopram
    // },
    // {
    //     "name": "Venlafaxine 75mg Tablet",
    //     "newprice": "34.00",
    //     "actualprice": "170.00",
    //     "off": 80,
    //     "category": "Antidepressant",
    //     "image": venlafaxine
    // },
    // {
    //     "name": "Duloxetine 30mg Capsule",
    //     "newprice": "35.00",
    //     "actualprice": "175.00",
    //     "off": 80,
    //     "category": "Antidepressant",
    //     "image": duloxetine
    // },
    // {
    //     "name": "Alprazolam 0.5mg Tablet",
    //     "newprice": "36.00",
    //     "actualprice": "180.00",
    //     "off": 80,
    //     "category": "Anxiety",
    //     "image": alprazolam
    // },
    // {
    //     "name": "Diazepam 5mg Tablet",
    //     "newprice": "37.00",
    //     "actualprice": "185.00",
    //     "off": 80,
    //     "category": "Anxiety",
    //     "image": diazepam
    // },
    // {
    //     "name": "Lorazepam 1mg Tablet",
    //     "newprice": "38.00",
    //     "actualprice": "190.00",
    //     "off": 80,
    //     "category": "Anxiety",
    //     "image": lorazepam
    // },
    // {
    //     "name": "Tramadol 50mg Capsule",
    //     "newprice": "39.00",
    //     "actualprice": "195.00",
    //     "off": 80,
    //     "category": "Pain Relief",
    //     "image": tramadol
    // },
    // {
    //     "name": "Oxycodone 5mg Tablet",
    //     "newprice": "40.00",
    //     "actualprice": "200.00",
    //     "off": 80,
    //     "category": "Pain Relief",
    //     "image": oxycodone
    // },
    // {
    //     "name": "Hydrocodone 5mg Capsule",
    //     "newprice": "41.00",
    //     "actualprice": "205.00",
    //     "off": 80,
    //     "category": "Pain Relief",
    //     "image": hydrocodone
    // },
    // {
    //     "name": "Morphine 10mg Tablet",
    //     "newprice": "42.00",
    //     "actualprice": "210.00",
    //     "off": 80,
    //     "category": "Pain Relief",
    //     "image": morphine
    // },
    // {
    //     "name": "Codeine 30mg Tablet",
    //     "newprice": "43.00",
    //     "actualprice": "215.00",
    //     "off": 80,
    //     "category": "Pain Relief",
    //     "image": codeine
    // },
     {
        "name": "Truuth Ashwagandha 500mg Capsule 60's",
        "newprice": "71.88",
        "actualprice": "599",
        "off": 88,
        "category": "Homeopathy",
        "image": ashwgandha
    },
    {
        "name": "Truuth Brahmi 300mg Capsule 60's",
        "newprice": "95.50",
        "actualprice": "650",
        "off": 85,
        "category": "Homeopathy",
        "image": inline
    },
    {
        "name": "Truuth Shilajit 200mg Capsule 60's",
        "newprice": "150.00",
        "actualprice": "800",
        "off": 81,
        "category": "Homeopathy",
        "image":shilajit
    },
    {
        "name": "Truuth Tulsi 400mg Capsule 60's",
        "newprice": "120.25",
        "actualprice": "700",
        "off": 83,
        "category": "Homeopathy",
        "image": disprin_regular
    },
    {
        "name": "Truuth Giloy 250mg Capsule 60's",
        "newprice": "89.99",
        "actualprice": "550",
        "off": 84,
        "category": "Homeopathy",
        "image":saridon_advance_tablets
    },
];

export default Allproduct;
