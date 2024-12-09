import climax from "../../public/climax.png"
import box from "../../public/box.png"
import ocookies from "../../public/ocookies.png"
import isola from "../../public/isola.png"
import isophone from "../../public/isophone.png"
import isotab from "../../public/isotab.png"
import isolap from "../../public/isolap.png"
import gmt from "../../public/gmt.png"
import jibb from "../../public/jibb.png"
import BM from "../../public/BM.png"
import climaxlaptop from "../../public/climaxlaptop.png"
import climaxtab from "../../public/climaxtab.png"
import cookietop from "../../public/cookietop.png"
import cookietab from "../../public/cookietab.png"
import cookiephone from "../../public/cookiephone.png"
import phonecook from "../../public/phonecook.png"
import gmtphone from "../../public/gmtfinalphone.png"
import phoneclimax from "../../public/phoneclimax.png"
import gmttablet from "../../public/gmttablet.png"
import tablet from "../../public/tablet.png"
import gmtdesktop from "../../public/gmtdesktop.png"
import gmtdesktopp from "../../public/gmtdesktopp.png"
import cookiedesk from "../../public/cookiedesk.png"
import { SiWoocommerce } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import tabcookie from "../../public/tabcookie.png";
import gmtlaptop from "../../public/gmtlaptop.png"
import climtop from "../../public/climtop.png"
import bmdesk from "../../public/bmdesk.png"
import bmtab from "../../public/bmtab.png"
import phoemillion from "../../public/phoemillion.png"
import { FaWordpress } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { SiGoogletagmanager } from "react-icons/si";
import logorbb from "../../public/logorbb.png";
import cookiephoning from "../../public/cookiephoning.png";
import climwhite from "../../public/climwhite.png"
import cookwhite from "../../public/cookwhite.png"
import jibwhite from "../../public/jibwhite.png"
import { SiGoogleanalytics } from "react-icons/si";

import cookiegood from "../../public/cookiegood.png";






export const SLIDE = [
                    {                    
      
      
                        id:1 ,
                        img : gmt ,
                        imgdark :gmt ,
                         title : 'GRAND méchant' , 
                         desc : 'Créateur de mode ' , 
                         service : "Boutique E-commerce", 
                         stack : [FaWordpress , SiWoocommerce] ,
                           slide : [ gmtlaptop , gmtphone , tablet , ] , 
                           extend : "Créateur de mode français, un style hautement illustré dans un univers dark cartoon",
                           url:"https://grandmechant.com/"
                          
                          
                          },// Red




                        {
                          
                          id:2,

                          img :climax ,
                          imgdark :climwhite,
                          url:"https://www.climaxfightacademy.fr/",

                           title : 'CLIMAX FIGHT A.' ,

                            desc : "Club d'arts martiaux" ,

                             service : "Site web - Stratégie digitale (SMO - SEO)", 

                             stack : [FaReact , SiNextdotjs , SiGooglesearchconsole , SiGoogleanalytics ] ,

                             laptop : climaxlaptop , 

                             phone : phoneclimax , 

                             slide : [ climtop,phoneclimax , climaxtab, ],
                             extend : "Climax Fight Academy : L'excellence des sports de combat à Lyon. Une académie multi-sport ouverte toute l'année  ! "
                            
                            },
                            
                            
                            // Green
                         {id:3 ,
                          
                          img :ocookies ,
                          imgdark :ocookies,
                          url:"https://ocookies.fr/",
                          title : 'OCookies' , 
                          
                          desc  :'La Fabrique à Biscuit' , 
                          
                          service : "Boutique E-commerce , Analytics", 
                          
                          
                          stack : [ FaWordpress, SiWoocommerce , SiGooglesearchconsole,SiGoogleanalytics ] , 
                          
                          laptop : cookietop ,
                          
                          phone : phonecook , 
                          
                          slide : [ cookietop, cookiephone, cookietab, ],
                          extend : "l’univers savoureux d’O’Cookies, où la simplicité rencontre la qualité. Des cookies uniques  confectionnés avec soin, mettant en avant des ingrédients de première qualité"
                        
                        },

                      



   

                    {
                      
                      
                      id:4,


                      img :BM,
                      imgdark :BM ,
                      url : "https://www.batistemillion.com/",

                      title : 'Batiste Million' ,


                       desc  :'FASHION DESIGNER' ,

                       service : "Refonte site E-commerce, audit global de la stratégie digitale et optimisations ",

                       stack : [SiShopify , SiGoogletagmanager] ,

                        slide : [ bmdesk, phoemillion , bmtab , ],
                        extend : "Streetwear haut de gamme , Batiste Million est implanté dans le paysage urbain français avec ses pièces iconiques"
                      
                      
                      },

                      {
                      
                      
                        id:5,
  
  
                        img :isola, 
                        imgdark :isola ,
                        url:"https://isolarhonealpes.com/",
  
                        title : 'Isola Rhone Alpes' ,
  
  
                         desc  :'Rénovation Energétique' ,
  
                         service : "E-commerce boutique",
  
                         stack : [SiShopify] ,
  
                          slide : [ isolap, isophone, isotab],
                          extend : "Spécialistes des travaux de rénovations energétiques , Isola Rhône Alpes oeuvre pour la réduction des consommations énergétiques des bâtiments depuis 2019. "
                        
                        
                        },

                   
     // Blue
  // Mag4nta
]