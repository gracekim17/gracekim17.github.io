#include "MyCommon.h"
#include "DoMyWork.h"
#include "DoMyWork2.h"

int test(IDoMyWork *temp)
{
	temp->Do(true);
	return 0;
}

int test2(IDoSurf *temp)
{
	temp->DoPositively(1);
	return 0;
}

class Parent
{
public:
int data;
void foo() {
}

virtual void bar() {
cout << "parent bar" << endl;
}

};

class Child
{
public:
void bar() {
cout << "child bar" << endl;
}
};

class GrandChild : public Child, public Parent
{
public:
	void bar() {
		cout << "Grand child bar" << endl;
	}
};

int main()
{
	GrandChild c;
	c.bar();

	GrandChild* i;
	i = &c;
	i->bar();

	Child *i2;
	i2 = &c;
	i2->bar();

	Parent* i3;
	i3 = &c;
	i3->bar();


/*

	DoMyWork objDoMyWork;
	test(&objDoMyWork);
	test2(&objDoMyWork);

	KKK * temp2;
	temp2 = new KKK();
    test(temp2);
	test2(temp2);

	DoMyWork2 objDoMyWork2;
	objDoMyWork2.Start();

	int result = DoMyWorkStart();
	result = DoMyWorkEnd();
	delete temp2;
*/
    return 0;
}

