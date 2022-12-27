#include<iostream>
using namespace std;
int main(){
    float w , h , vw , vh ,dh,dw;
    char d;
    // float rem , vh , vw;
    while(1){
    // cin>>vh;
    // cout<<(vh*794)/1600;
    // cin>>vw;
    // cout<<(vw*1440)/1600;
    cout<<"enter width\n";
    cin>>w;
    cout<<"enter height\n";
    cin>>h;
    cout<<"enter device\n";
    cin>>d;
    if(d=='d')
    {dw=1440;dh=720;}
    if(d=='m')
    {dw=360;dh=800;}
    
    vw = (w*100)/dw;
    vh = (h*100)/dh;
    cout<<"width: "<<vw<<"vw;\n";
    cout<<"height: "<<vh<<"vh;\n";
    // cout<<"vh is "<<vh;
    }
    return 0;
}