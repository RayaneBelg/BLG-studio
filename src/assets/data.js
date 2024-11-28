import climax from "../../public/climax.png"
import box from "../../public/box.png"
import ocookies from "../../public/ocookies.png"
import isola from "../../public/isola.png"
import gmt from "../../public/gmt.png"
import jibb from "../../public/jibb.png"
import BM from "../../public/BM.png"
import climaxlaptop from "../../public/climaxlaptop.png"
import climaxtab from "../../public/climaxtab.png"
import cookietop from "../../public/cookietop.png"
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
import phoemillion from "../../public/phoemillion.png"





export const SLIDE = [
                    {                    
      
      
                        id:1 ,
                        img : gmt ,
                         title : 'GRAND méchant' , 
                         desc : 'fashion designer ' , 
                         service : "E-commerce boutique", 
                         stack : SiWoocommerce  ,
                           slide : [ gmtphone , tablet , gmtlaptop] , 
                           extend : "Créateur de mode français, un style hautement illustré,un univers transcrit dans une boutique e-commerce crée avec wooCommerce"
                          
                          
                          },// Red




                        {
                          
                          id:2,

                          img :climax ,

                           title : 'CLIMAX FIGHT A.' ,

                            desc : "Club d'arts martiaux" ,

                             service : "Website", 

                             stack : FaReact , 

                             laptop : climaxlaptop , 

                             phone : phoneclimax , 

                             slide : [ phoneclimax , climaxtab, climtop],
                             extend : "Climax Fight Academy : L'excellence des sports de combat à Lyon. Une académie multi-sport ouverte toute l'année, avec des inscriptions possibles à tout moment – rejoignez-nous pour repousser vos limites ! "
                            
                            },
                            
                            
                            // Green
                         {id:3 ,
                          
                          img :ocookies ,
                          
                          title : 'OCookies' , 
                          
                          desc  :'La Fabrique à Biscuit' , 
                          
                          service : "E-commerce boutique",
                          
                          
                          stack : "WooCommerce" , 
                          
                          laptop : cookietop ,
                          
                          phone : phonecook , 
                          
                          slide : [cookiephone, tabcookie, cookietop]
                        
                        },

                       {id:4 ,img :jibb , title : 'JM coaching' , desc  :'Coach sportif' , service : "E-commerce boutique", stack : "WooCommerce"}, 

   

                    {
                      
                      
                      id:5,


                      img :BM, 

                      title : 'JM coaching' ,


                       desc  :'FASHION DESIGNER' ,

                       service : "E-commerce boutique",

                       stack : "WooCommerce" ,

                        slide : [ phoemillion , tablet , bmdesk]
                      
                      
                      },

                   
     // Blue
  // Mag4nta
]