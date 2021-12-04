import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadWhereInput } from './squad-where.input';

@InputType()
export class SquadRelationFilter {

    @Field(() => SquadWhereInput, {nullable:true})
    is?: SquadWhereInput;

    @Field(() => SquadWhereInput, {nullable:true})
    isNot?: SquadWhereInput;
}
