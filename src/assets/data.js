import climax from "../../public/climax.png"
import box from "../../public/box.png"
import ocookies from "../../public/ocookies.png"
import isola from "../../public/isola.png"
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
import logorbb from "../../public/logorbb.png";
import cookiephoning from "../../public/cookiephoning.png";
import climwhite from "../../public/climwhite.png"
import cookwhite from "../../public/cookwhite.png"
import jibwhite from "../../public/jibwhite.png"

import cookiegood from "../../public/cookiegood.png";






export const SLIDE = [
                    {                    
      
      
                        id:1 ,
                        img : gmt ,
                        imgdark :gmt ,
                         title : 'GRAND méchant' , 
                         desc : 'fashion designer ' , 
                         service : "E-commerce boutique", 
                         stack : [FaWordpress , SiWoocommerce] ,
                           slide : [ gmtlaptop , gmtphone , tablet , ] , 
                           extend : "Créateur de mode français, un style hautement illustré dans un univers dark cartoon "
                          
                          
                          },// Red




                        {
                          
                          id:2,

                          img :climax ,
                          imgdark :climwhite,
                          url:"https://www.climaxfightacademy.fr/",

                           title : 'CLIMAX FIGHT A.' ,

                            desc : "Club d'arts martiaux" ,

                             service : "Website", 

                             stack : [FaReact , FaWordpress] ,

                             laptop : climaxlaptop , 

                             phone : phoneclimax , 

                             slide : [ climtop,phoneclimax , climaxtab, ],
                             extend : "Climax Fight Academy : L'excellence des sports de combat à Lyon. Une académie multi-sport ouverte toute l'année  ! "
                            
                            },
                            
                            
                            // Green
                         {id:3 ,
                          
                          img :ocookies ,
                          imgdark :ocookies,
                          
                          title : 'OCookies' , 
                          
                          desc  :'La Fabrique à Biscuit' , 
                          
                          service : "E-commerce boutique",
                          
                          
                          stack : [ FaWordpress, SiWoocommerce ] , 
                          
                          laptop : cookietop ,
                          
                          phone : phonecook , 
                          
                          slide : [ cookietop, cookiephone, cookietab, ],
                          extend : "l’univers savoureux d’O’Cookies, où la simplicité rencontre la qualité. Des cookies uniques  confectionnés avec soin, mettant en avant des ingrédients de première qualité"
                        
                        },

                       {id:4 ,
                        
                        img :jibb , 
                        imgdark :jibwhite ,
                        
                        title : 'JM coaching' , 
                        
                        desc  :'Coach sportif' , 
                        
                        service : "E-commerce boutique", 

                        stack : [ FaWordpress, SiWoocommerce ] , 
                        
                         

                        slide : [cookiegood, cookiephoning],


                        extend : "l’univers savoureux d’O’Cookies, où la simplicité rencontre la qualité. Des cookies uniques  confectionnés avec soin, mettant en avant des ingrédients de première qualité" } ,



   

                    {
                      
                      
                      id:5,


                      img :BM,
                      imgdark :BM ,

                      title : 'Batiste Million' ,


                       desc  :'FASHION DESIGNER' ,

                       service : "E-commerce boutique",

                       stack : [SiShopify] ,

                        slide : [ bmdesk, phoemillion , bmtab , ],
                        extend : "Climax Fight Academy : L'excellence des sports de combat à Lyon. Une académie multi-sport ouverte toute l'année  ! "
                      
                      
                      },

                      {
                      
                      
                        id:6,
  
  
                        img :isola, 
                        imgdark :isola ,
  
                        title : 'Isola Rhone Alpes' ,
  
  
                         desc  :'Energies' ,
  
                         service : "E-commerce boutique",
  
                         stack : [SiShopify] ,
  
                          slide : [ isolap, logorbb,logorbb],
                          extend : "Climax Fight Academy : L'excellence des sports de combat à Lyon. Une académie multi-sport ouverte toute l'année  ! "
                        
                        
                        },

                   
     // Blue
  // Mag4nta
]