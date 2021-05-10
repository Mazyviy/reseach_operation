// reseach_operation.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
#define _USE_MATH_DEFINES
#include <iostream>
#include <math.h>
#include <iomanip>
constexpr auto text_style_color_start = "\x1b[32m";
constexpr auto text_style_end = "\x1b[0m";
using namespace std;

double fun(double x,double y){
	return pow(M_E,(-(x+y)))*(1+cos(2*M_PI*(y/10)));
}

int main(){
	int row=0,col=0,i=0,j=0;

	cout<<"Enter row: ";
	cin>>row;
	cout<<"Enter col: ";
	cin>>col;
	cout << endl;

	double** array=new double* [row];
	double** array_sum = new double* [row];
	int** array_path = new int* [row];
	for(i=0; i<row; i++){
		array[i]=new double[col];
		array_sum[i] = new double[col];
		array_path[i] = new int[col];
	}

	for(i=row-1; i>=0; --i){
		for(j=0; j<col; ++j){
			array[i][j]=fun((row-1)-i,j);
			array_path[i][j] = 0;
		}
	}

	array_sum[0][col-1]=array[0][col-1];

	for(j=col-2; j>=0; --j){
		array_sum[0][j]=array_sum[0][j+1]+array[0][j];
	}
	for(i=1; i<row; ++i){
		array_sum[i][col-1]=array_sum[i-1][col-1]+array[i][col-1];
		for(j=col-2; j>=0; --j){
			if(array_sum[i-1][j]<=array_sum[i][j+1]){
				array_sum[i][j]=array[i][j]+array_sum[i-1][j];
			}
			else{
				array_sum[i][j]=array[i][j]+array_sum[i][j+1];
			}
		}
	}

	cout<<"Array"<<endl;
	for (i=0; i<row; ++i){
		for (j=0; j<col; ++j){
			cout<<fixed<<setw(10)<<setprecision(8)<<array[i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl;
	cout<<"Array_sum"<<endl;
	for (i=0; i<row; ++i){
		for (j=0; j<col; ++j){
			cout<<fixed<<setw(10)<<setprecision(8)<<array_sum[i][j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl;

	j=0;
	i=row-1;

	cout<<"Way: "<<array_sum[row-1][0]<<endl;
	cout<<"("<<i<<","<<j<<")";
	while(true){
		if(i==0 && j==col-1){
			break;
		}
		if(j!=col-1){
			if(i!=0 && (array_sum[i-1][j]<=array_sum[i][j+1])){
				cout<<"-("<<i-1<<","<<j<<")";
				array_path[i-1][j]=1;
				i--;
			}
			else{
				cout<<"-("<<i<<","<<j+1<<")";
				array_path[i][j+1]=1;
				j++;
			}
		}
		else{
			if(j!=col-1){
				cout<<"-("<<i-1<<","<<j<<")";
				array_path[i-1][j]=1;
				j--;
			}
			else{
				cout<<"-("<<i-1<<","<<j<< ")";
				array_path[i-1][j]=1;
				i--;
			}
		}
	}
	cout<<endl;
	cout<<endl;

	array_path[row-1][0]=1;

	for(i=0; i<row; ++i){
		for(j=0; j<col; ++j){
			if(array_path[i][j]==1)
				cout<<text_style_color_start<<array[i][j]<<text_style_end<<" ";
			else
				cout<<array[i][j]<< " ";
		}
		cout<<endl;
	}

	for(i=0; i<row; i++){
		delete[] array[i];
		delete[] array_sum[i];
		delete[] array_path[i];
	}
	delete[] array;
	delete[] array_sum;
	delete[] array_path;
	return 0;
} 