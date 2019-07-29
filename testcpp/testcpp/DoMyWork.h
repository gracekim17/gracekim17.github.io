class IDoSurf
{
public:
    virtual void DoPositively(int) = 0;  // regardless the condition because you can see always the joy (miraculous existing) of the present.
};

class IDoMyWork
{
public:
    virtual void Do(bool) = 0; // either negatively or positively case by case
};

class DoMyWork : public IDoMyWork, public IDoSurf
{
private:
    void Start(); 
    void End();
    int now = 0;
public:    
    void Do(bool data) { 
        if (now == 0) 
        {
           cout << "Do() called negatively " << data << endl; 
        }
        else
        {
            cout << "Do() called positively " << data << endl; 
        }
    }

    void DoPositively(int value) {
        int oldValue = now;
        now = value;
        Do(true);
        now = oldValue;
    }

    DoMyWork();
    ~DoMyWork();
};

class KKK : public IDoMyWork, public IDoSurf
{
public:
    void DoKKK() { 
        cout << "Do() called negatively" << endl; 
    }

    void DoPositively(int value) {
        cout << "Surrender to now... " << value << endl;
        cout << "Now I Do() called positively" << endl; 
    }

    void Do(bool value) { 
        cout << "data " << value << endl;
        DoKKK();
    }
};


int DoMyWorkStart();
int DoMyWorkEnd();