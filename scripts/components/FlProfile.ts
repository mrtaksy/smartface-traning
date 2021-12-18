import FlProfileDesign from 'generated/my-components/FlProfile';

export default class FlProfile extends FlProfileDesign {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
    set labelText(value:string){
        this.lblProfile.text=value
    }
    get labelText():string{
        return this.lblProfile.text;
    }
    set imageSource(value:string){
        this.imgIcon.loadFromUrl({
            url:value
        })
    }
}
