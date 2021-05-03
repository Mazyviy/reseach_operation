// reseach_operation.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include <math.h>
#include <iomanip>
using namespace std;

double fun(double x,double y){
	return pow(M_E,(-(x+y)))*(1+cos(2*M_PI*(y/10))); 
}

int main(){
	int row=0,col=0;
	cout<<"Enter row: ";
	cin>>row;
	cout<<"Enter col: ";
	cin>>col;
	double** array=new double* [row];
	for(int i=0; i<row; i++){
		array[i]=new double[col]; 
	}
	double** array_sum=new double* [row];
	for(int i=0; i<row; i++){
		array_sum[i]=new double[col];
	}
	int** array_path=new int* [row];
	for(int i=0; i<row; i++){
		array_path[i]=new int[col];
	}
	
	for(int i=row-1; i>=0; --i){
		for(int j=0; j<col; ++j){
			array[i][j]=fun(row-1-i,j);
		}
	}
	
	array_sum[row-1][col-1]={0};
	array_path[row-1][col-1]={-1};
	array_sum[0][col-1]=array[0][col-1];
	
	for(int j=col-2; j>=0; --j){
		array_sum[0][j]=array_sum[0][j+1]+array[0][j];
		array_path[0][j]=1;
	}
	for(int i=1; i<row; ++i){
		array_sum[i][col-1]=array_sum[i-1][col-1]+array[i][col-1];
		array_path[i][col-1]=0;
		for(int j=col-2; j>=0; --j){
			if(array_sum[i-1][j]<=array_sum[i][j+1]){
				array_sum[i][j]=array[i][j]+array_sum[i-1][j];
				array_path[i][j]=0;
			}
			else{
				array_sum[i][j]=array[i][j]+array_sum[i][j+1];
				array_path[i][j]=1;
			}
		}
	}
	cout<<"Array"<<endl;
	for(int i=0; i<row; ++i){
		for(int j=0; j<col; ++j){
			cout<<fixed<<setw(10)<<setprecision(8)<<array[i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl;
	cout<<"Array_sum"<<endl;
	for(int i=0; i<row; ++i){
		for(int j=0; j<col; ++j){
			cout<<fixed<<setw(10)<<setprecision(8)<<array_sum[i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl;
	cout<<"W*: "<<array_sum[row-1][0]<<endl<<endl;
	int i=row-1,j=0;
	cout<<"Way: ";
	while(true){
		cout<<"("<<i<<","<<j<<")-";
		if(array_path[i][j]) ++j;  
		else --i;
		if(i==0 && j==col-1){
			cout<<"(0,"<<col-1<<")"<<endl;
			break;
		}
	}
	for(int i=0; i<row; i++){
		delete[] array[i];
		delete[] array_sum[i];
		delete[] array_path[i];
	}
	delete[] array;
	delete[] array_sum;
	delete[] array_path;
}

