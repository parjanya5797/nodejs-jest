test('Spying on a method of an object',() => {
    const video = { 
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video,'play');
    video.play();
    video.play();

    expect(spy).toHaveBeenCalled(); //Checks how many times a mocked function has been called
    spy.mockRestore(); // restores the original implementation
})